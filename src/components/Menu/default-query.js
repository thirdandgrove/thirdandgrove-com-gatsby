import { useStaticQuery, graphql } from 'gatsby';

export default function allDataHeader() {
  const nodes = useStaticQuery(graphql`
    query allDataHeader {
      mainMenu: allMenuLinkContentMenuLinkContent(
        filter: { menu_name: { eq: "main" } }
      ) {
        nodes {
          menuName: menu_name
          drupalId: drupal_id
          drupalParentMenuItem: drupal_parent_menu_item
          title
          langcode
          enabled
          weight
          link {
            title
            uri
            uri_alias
            url
          }
        }
      }
    }
  `);

  return nodes;
}
