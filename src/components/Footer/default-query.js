import { useStaticQuery, graphql } from 'gatsby';

export default function AllDataFooter() {
  const nodes = useStaticQuery(graphql`
    query allDataFooter {
      mainMenu: allMenuLinkContentMenuLinkContent(
        filter: { menu_name: { eq: "footer" } }
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
