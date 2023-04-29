
import{PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props)=>{
    
    return (
        <div style={{ height: '100vh'}}>
       <PrettyChatWindow 
       projectId='5f08d5e0-d29a-4fd0-a3e9-c44cb3f918d3'
       username={props.user.username}
       secret={props.user.secret}
       style={{height: '100%'}}
       />
    </div>
    )
}

export default ChatsPage