import React from 'react'
import { Link, useStaticQuery ,graphql } from 'gatsby'
import  styles from './navigation.module.css'
import get from 'lodash/get'

const Navigation = () => {

  const data = useStaticQuery(graphql`
  {
    allContentfulNavigation {
      edges {
        node {
          id
          text
          url
          sort
          navigationChild {
            text
            id
            url
            sort
          }
        }
      }
    }
    contentfulAsset(title: {eq: "logo Mirae Asset"}) {
      file {
        url
      }
    }
  }
  `)

  const navigations = get(data, 'allContentfulNavigation.edges');
  const urlLogoMirae = get(data, 'contentfulAsset.file.url');
  navigations.sort((a, b) => a.node.sort - b.node.sort);
  navigations.forEach(navigation => {
    if(!navigation && !navigation.node && !navigation.node.navigationChild && !navigation.node.navigationChild.sort){
      navigation.node.navigationChild.sort((a, b) => a.sort - b.sort);
    }
  });
  return (
    <section className={styles.navBar}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <a href="#"><img  src= {urlLogoMirae} /></a>
        </div>
        <nav>
          <div className={styles.navMobile}><a id="navToggle" href="#!"><span></span></a></div>
          <ul className={styles.navTist}>

            {navigations.map(navigation => (
              <li key={navigation.node.id}>
                <div className={styles.dropdown}>
                  <Link to={`/${navigation.node.url}` } >{navigation.node.text}</Link>
                  <div className={styles.dropdownContent}>
                    {navigation.node.navigationChild != null ? navigation.node.navigationChild.map(child => (
                        <Link to={`/${child.url}` } key={child.id} >{child.text}</Link>
                    )):''}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  ) 

}

export default Navigation
