import { SingleComment } from '../Comments/SingleComment'
import { TextEditor } from '../TextEditor/TextEditor'

export const CommentLayout = () => {
    return (
        <div>
            <h3 style={{ margin: '5px 0 15px 0 ' }}>Add Comments</h3>
            <TextEditor onSubmit={() => { }} title="Add Comment" />
            <h3 style={{ margin: '5px 0 15px 0 ' }}>Activity</h3>
            <div>
                <SingleComment
                    comment="This is a receiving comment"
                    avatarUrl="/src/assets/man.png"
                    type="receiving"
                />
                <SingleComment
                    comment="This is a sending comment"
                    avatarUrl="../../../public/assets/man.png"
                    type="sending"
                />
                <SingleComment
                    comment="This is a receiving comment"
                    avatarUrl="../../../public/logo192.png"
                    type="receiving"
                />
            </div>
        </div>
    )
}
