import { Col, Row } from 'antd'
import React from 'react'
import Heading from './header'



const PageLayout = ({children}:any) => {
  return (
    <Row justify={'center'}>
      <Col md={24} sm={16} xs={24}>
        <Heading />
        {children}
      </Col>
    </Row>
  )
}

export default PageLayout