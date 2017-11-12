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
        <div>
        <Grid centered columns={3} verticalAlign='middle' style={{height: "100%"}}>
            <Grid.Column>
                <h1><Icon name='setting' size='small' loading />What's On<Icon name='setting' size='small' loading /></h1>
                <p>{description[0]}<br/>{description[1]}</p>
                <p className='mail'>  {mailText} <br/><a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></p>

            </Grid.Column>  
        </Grid>
        </div>
    )
}

export default Main;
