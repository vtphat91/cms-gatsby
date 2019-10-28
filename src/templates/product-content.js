import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useStaticQuery ,graphql } from 'gatsby'
import Layout from '../components/layout'
import { BLOCKS  } from '@contentful/rich-text-types';
import get from 'lodash/get'

const ProductContent = ({data}) => {

  //case RichText
/*
  console.log("data ",data);
  const productContent = data.contentfulNavigationChild.productContentRefer.content.content;
  const title = data.contentfulNavigationChild.productContentRefer.title;

  const options = {
  
    renderNode: {
     
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log('11111111111111');
        console.log('node.data.target.fields',node.data.target.fields);
        const { title, description, file } = node.data.target.fields;
        console.log('node.data.target.fields',node.data.target.fields);
        const mimeType = file['en-US'].contentType;
        const mimeGroup = mimeType.split('/')[0];

        switch (mimeGroup) {
          case 'image':
            return `<img
              title=${ title ? title['en-US'] : null}
              alt=${description ?  description['en-US'] : null}
              src=${file['en-US'].url}
            />`
          case 'application':
            return `<a
              alt=${description ?  description['en-US'] : null}
              href=${file['en-US'].url}
              >${ title ? title['en-US'] : file['en-US'].details.fileName }
            </a>`
          default:
            return `<span style=${{backgroundColor: 'red', color: 'white'}}> ${mimeType} embedded asset </span>`
        }
      }
    }
  }

  */
    const boxContent = get(data, 'contentfulBoxContentBodyTextNode.childMarkdownRemark');
    const post = get(data, 'contentfulNavigationChild.productContentRefer');
    if(post != null ){
      return (

        <Layout>
          <section className="content_block clearfix wrapper">
              <section className="content left">
                <h2 className="section-headline"></h2>
                <div
                      dangerouslySetInnerHTML={{
                        __html: post.body.childMarkdownRemark.html,
                      }}/>
              </section>    
              <section className="sidebar right sticky fixed">
                  <div
                      dangerouslySetInnerHTML={{
                        __html: boxContent.html,
                  }}/>
              </section>      
          </section>

        </Layout>
        )
      }else{
        return (
          <Layout>
            <section className="content_block clearfix wrapper">
              <section className="content left">
               <h2 className="section-headline"></h2>
                <div>Updating ...</div>
              </section>    
               <section className="sidebar right sticky fixed">
                 <div
                     dangerouslySetInnerHTML={{
                    __html: boxContent.html,
                  }}/>
              </section>      
           </section>
        </Layout>
        )
      }

}

export default ProductContent;


export const pageQuery123 = graphql`
query ProductContentByUrl($url: String!) {
  contentfulNavigationChild(url: {eq: $url}) {
    productContentRefer {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
  contentfulBoxContentBodyTextNode {
    childMarkdownRemark {
      html
    }
} 
}
`


