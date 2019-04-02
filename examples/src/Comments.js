import React, { Component } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import * as _ from 'lodash';

import styles from "./styles";
import { ParentComment } from './ParentComment';
import { Composer } from './Composer';
import { SeeMoreComments } from './SeeMoreComments'
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.fetchComments(this.props.jobId, 1);
    }

    saveComment = (text, parentId) => {

        let comment = {
            jobId: this.props.jobId,
            parentId: null,
            commentId: new Date().getTime().toString(),
            name: this.props.user.name,
            message: text,
            createdAt: (new Date()).toISOString(),
            userId: this.props.user.userId,
            isParent: false,
            profilePic: this.props.user.profilePic
        }

        if (!parentId) {
            comment.isParent = true
            comment.childrenCount = 0
        } else {
            comment.parentId = parentId
        }
        this.props.saveComment(comment)
    }

    editComment = (updatedComment) => {
        this.props.updateComment(updatedComment)
    }

    renderComments = (comments) => {
        if (_.isEmpty(comments)) {
            return <View />
        } else {
            return comments.map((comment) => {
                let replies = _.get(this.props.replies, `${comment.commentId}`, []);
                return (
                    <ParentComment
                        key={comment.commentId}
                        enabled={this.props.enabled}
                        loggedInUser={this.props.user}
                        jobId={this.props.jobId}
                        comment={comment}
                        replies={replies}

                        saveComment={this.saveComment}
                        deleteComment={this.props.deleteComment}
                        editComment={this.editComment}

                        fetchCommentReplies={this.props.fetchCommentReplies}
                        onPressProfile={this.props.onPressProfile}

                        replyPage={comment.replyPage}
                        repliesHasNextPage={comment.repliesHasNextPage}
                        isFetchingReplies={comment.isFetchingReplies}
                    />
                )
            })
        }
    }

    render() {
        const comments = _.get(this.props.comments, `[${this.props.jobId}]`, []);
        return (
            <ScrollView style={styles.container} >
                <Text style={styles.commentSectionTitle}>Comments</Text>

                {/* Render Composer */}
                <Composer
                    enabled={true}
                    user={this.props.user}
                    saveComment={this.saveComment}
                    parentId={null}
                    isReply={false}
                />

                {/* Render comments */}
                {this.renderComments(comments)}

                {/* Render see more comments */}
                <SeeMoreComments
                    seeMoreReplies={false}
                    comments={comments}
                    jobId={this.props.jobId}
                    fetchComments={this.props.fetchComments}
                    hasNextPage={this.props.commentsHasNextPage}
                    page={this.props.commentPage}
                    isFetching={this.props.isFetchingComments}
                />

                {/* Fetch comments loader */}
                {this.props.isFetchingComments && this.props.commentPage === 1 &&
                    <ActivityIndicator style={styles.seeMoreCommentsLoader} size="small" color={'#d3d3d3'} animating={true} />
                }

            </ScrollView>
        )
    }
}

export { Comments };