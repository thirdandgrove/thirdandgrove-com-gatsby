export default function buildMenu(links) {
  if (!links) {
    return [];
  }

  const enabledLinks = links
    .filter(link => !!link.enabled)
    .sort((currentLink, nextLink) => currentLink?.weight - nextLink?.weight);

  const parentLinks = enabledLinks.map(link => ({
    ...link,
    children: enabledLinks.filter(_link => {
      if (!_link.drupalParentMenuItem) {
        return false;
      }

      return _link.drupalParentMenuItem.includes(link?.drupalId || '');
    }),
  }));

  return parentLinks.filter(
    link =>
      parentLinks.filter(_link =>
        _link?.children?.find(child => child.drupalId === link.drupalId)
      ).length === 0
  );
}
