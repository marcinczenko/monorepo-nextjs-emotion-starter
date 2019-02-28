import React from 'react'
import { PageCentered, Centered, Spacer } from '@react-frontend-developer/react-layout-helpers'
import { Segment, Button, Icon, Header } from 'semantic-ui-react'

const Welcome = () => {
  return (
    <PageCentered>
      <Segment raised css={{ width: '80%', maxWidth: '500px' }}>
        <Centered>
          <Header as='h1'>Welcome</Header>
          <Icon name='thumbs up' size='massive' />
          <Spacer margin='30px 0 0 0'>
            <Button basic color='black'>Click Me!</Button>
          </Spacer>
        </Centered>
      </Segment>
    </PageCentered>
  )
}

export { Welcome }
