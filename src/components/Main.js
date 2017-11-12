// Import modules
import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import rescources
import './Main.less';
import ParagraphList from './ParagraphList';

const description = ['Welcome to What‘s On! We are building the largest and best-organized platform for events, using state-of-the-art technologies and latest insights from AI.','Having trouble finding your next event? - You are in the right place, stay tuned!'];
const mailText = 'Feel free to drop us a message:';
const mailAddress = 'mail@whats-on.today';

const Main = () => {
    return (
        <div>
            <MediaQuery query="(min-width: 768px)">
                <Grid centered columns={1} verticalAlign='middle' style={{height: "100%"}}>
                    <Grid.Column>
                        <h1 className='hMax'><Icon name='setting' size='small' loading />What's On<Icon name='setting' size='small' loading /></h1>
                        <div style={{width: '40%', margin: 'auto'}}>
                            <p>{description[0]}<br/>{description[1]}</p>
                        </div>
                        <p className='mail'>  {mailText} <br/><a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></p>

                    </Grid.Column>  
                </Grid>
            </MediaQuery>

            <MediaQuery query="(max-width: 768px)">
                <Grid centered columns={1} verticalAlign='middle' style={{height: "100%"}}>
                    <Grid.Column>
                        <h1 className='hMin'><Icon name='setting' size='large' loading /></h1>
                        <h1 className='hMin'>What's On</h1>
                        <div style={{width: '80%', margin: 'auto'}}>
                            <p>{description[0]}<br/>{description[1]}</p>
                        </div>
                        <p className='mail'>  {mailText} <br/><a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></p>

                    </Grid.Column>  
                </Grid>
            </MediaQuery>

            
        </div>
    )
}

export default Main;
