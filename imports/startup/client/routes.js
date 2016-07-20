import React from 'react'
import { mount } from 'react-mounter'
import Nav from '/imports/ui/layouts/Nav'
import MainLayout from '/imports/ui/layouts/MainLayout'

//Public Routes
FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
        nav: () => (<Nav />),
        content: () => (''),
        footer: () => ('')
    })
  }
}
