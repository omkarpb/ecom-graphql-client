import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Mutation } from '@apollo/react-components';
import '../styles/commentForm.css';

const ADD_COMMENT = gql`
    mutation CreateComment($message: String!, $rating: Float!, $productId: ID!) {
        createComment(message: $message, rating: $rating, productId: $productId) {
            message
            rating
            date
        }
    }
`;
class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            rating: 0
        };
    }

    render() {
        const formInvalid = this.state.message === '' || this.state.rating === 0;
        return (
            <Mutation mutation={ADD_COMMENT}>
                {(addComment, { data }) => (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.setState({message: '', rating: 0})
                        addComment({
                            variables: {
                                message: this.state.message,
                                rating: Number(this.state.rating),
                                productId: this.props.productId
                            }
                        });
                    }}>
                        <ul>
                            <li><textarea type="text" name="message" id="message" onChange={(e) => this.setState({message: e.target.value})} placeholder="Comment here ..."></textarea></li>
                            <li><input type="number" name="rating" id="rating" min="1" max="10" placeholder="Rating" onChange={(e) => this.setState({rating: e.target.value})}/></li>
                            <li><button className="addButton" disabled={formInvalid}>Add</button></li>
                        </ul>
                    </form>
                )}
            </Mutation>
        )
    }
}

export default CommentForm
