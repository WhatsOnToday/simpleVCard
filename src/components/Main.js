// Import modules
import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// Import rescources
import './Main.less';
import ParagraphList from './ParagraphList';

const title = ['The What\'s On Project', '- Find your next Event!'];
const mailText = 'Feel free to drop us a message:';
const mailAddress = 'mail@whats-on.today';

const Main = () => {
    return (
        <div>
            <MediaQuery query="(min-width: 768px)">
                <Grid centered columns={1} verticalAlign='middle' style={{height: "100%"}}>
                    <Grid.Column>
                        <h1 className='hMax'>{title[0]} </h1>
                        <h2 className='hMin'>{title[1]} </h2> <br/>
                        <h2 className='mail'>{mailText} <br/> <a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></h2>

                    </Grid.Column>  
                </Grid>
            </MediaQuery>

            <MediaQuery query="(max-width: 768px)">
                <Grid centered columns={1} verticalAlign='middle' style={{height: "100%"}}>
                    <Grid.Column>
                        <h1 className='hMin'>{title}</h1><br/>
                        <h2 className='mail'>  {mailText} <br/> <a href={'mailto:'+ mailAddress}><Icon name='mail' size='small'className='mailIcon'/>{mailAddress}</a></h2>

                    </Grid.Column>  
                </Grid>
            </MediaQuery>

            
        </div>
    )
}

export default Main;
