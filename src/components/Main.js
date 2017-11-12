// Import modules
import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import rescources
import './Main.less';
import ParagraphList from './ParagraphList';

const title = 'The What\'s On Project';
const description = ['Welcome to What\'s On! We are building the largest and best-organized platform for events, using state-of-the-art technologies and latest insights from AI.','We are pitching at the Business Idea Slam 2017! Looking forward to meeting you.','Having trouble finding your next event? - You are in the right place, stay tuned!'];
const link = 'https://www.htw-dresden.de/de/wiwi/fakultaet/htw-gruendungsschmiede/business-idea-slam-2017.html';
const mailText = 'Feel free to drop us a message:';
const mailAddress = 'mail@whats-on.today';

const Main = () => {
    return (
        <div>
            <MediaQuery query="(min-width: 768px)">
                <Grid centered columns={1} verticalAlign='middle' style={{height: "100%"}}>
                    <Grid.Column>
                        <h1 className='hMax'><Icon name='setting' size='small' loading />{title}<Icon name='setting' size='small' loading /></h1>
                        <div style={{width: '50%', margin: 'auto'}}>
                            <br/>
                            <p style={{width: '80%', margin: 'auto'}}>{description[0]}</p> <br/><br/>
                            <p>{description[1]} <br/><br/>
                            <a href={link}>{link}</a></p><br/>
                            <p>{description[2]}</p>
                        </div> <br/>
                        <p className='mail'>  {mailText} <br/> <a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></p>

                    </Grid.Column>  
                </Grid>
            </MediaQuery>

            <MediaQuery query="(max-width: 768px)">
                <Grid centered columns={1} verticalAlign='middle' style={{height: "100%"}}>
                    <Grid.Column>
                        <h1 className='hMin'><Icon name='setting' size='large' loading /></h1>
                        <h1 className='hMin'>{title}</h1>
                        <div style={{width: '50%', margin: 'auto'}}>
                            <br/>
                            <p>{description[0]}</p> <br/><br/>
                            <p>{description[1]} <br/><br/>
                            <a href={link}>{link}</a></p><br/>
                            <p>{description[2]}</p>
                        </div> <br/>
                        <p className='mail'>  {mailText} <br/> <a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></p>

                    </Grid.Column>  
                </Grid>
            </MediaQuery>

            
        </div>
    )
}

export default Main;
