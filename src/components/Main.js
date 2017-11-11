// Import modules
import React from 'react';
import {Grid, Icon} from 'semantic-ui-react'

// Import rescources
import './Main.less';
import ParagraphList from './ParagraphList';

const description = ['Welcome to What‘s On! We are building the largest and best-organized platform for events, using state-of-the-art technologies and latest insights from AI.','Having trouble finding your next event? - You are in the right place, stay tuned!'];
const mailText = 'Feel free to drop us a message:';
const mailAddress = 'mail@whats-on.today';

const Main = () => {
    return (
        <Grid centered columns={3} verticalAlign='middle' style={{height: "100%"}}>
            <Grid.Column>
                <h1>What's On <Icon name='setting' size='large' loading /></h1>
                <ParagraphList list={description}/>
                <p className='mail'>  {mailText} <a href={'mailto:'+ mailAddress}>{mailAddress}</a></p>

            </Grid.Column>  
        </Grid>
    )
}

export default Main;
