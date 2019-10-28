import React from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import './about-us.css'

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    {
        contentfulAboutUs {
            title
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        contentfulBoxContentBodyTextNode {
            childMarkdownRemark {
              html
            }
        } 
    }
    `)
    const title = get(data, 'contentfulAboutUs.title');
    const body = get(data, 'contentfulAboutUs.body');
    const bodyBoxContent = get(data, 'contentfulBoxContentBodyTextNode.childMarkdownRemark');
    return (
        <Layout>
            <section className="content_block clearfix wrapper">
                <section className="content left ceo">
                    <h2 className="section-headline">{title}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: body.childMarkdownRemark.html,
                        }}/>
                </section>  
                <section className="sidebar right sticky fixed">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: bodyBoxContent.html,
                        }}/>
        
                </section>      
            </section>
        </Layout>
    );
}

export default IndexPage;