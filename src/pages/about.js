import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const About = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Layout>
                <h1>About Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>パス</th>
                            <th>名前</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.nodes.map(node => (
                            <tr>
                                <td>{node.relativePath}</td>
                                <td>{node.name}</td>
                                <td>{node.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Layout>
        </div>
    )
}

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        relativePath
        name
        id
      }
    }
  }
`

export default About