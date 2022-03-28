/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import { State } from '../../types/common';
import Post from '../../components/organisms/Post';
import { BLACK, DARK_GREY, GREY, LIGHT_GREY, PRIMARY, withOpacity } from '../../utils/colors';
import { actions as postActions } from '../../actions/post';
import { actions as commentActions } from '../../actions/comment';
import { Comment } from '../../types/comment';
import EmptyComments from '../../components/atoms/EmptyComments';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import CloseButton from '../../components/atoms/CloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Loader from '../../components/atoms/Loader';

export type PostProp = NativeStackNavigationProp<LoggedStackParamList, 'Post'>;

type Props = {
    navigation: PostProp;
};

type renderItemProps = {
    item: Comment;
    index: number;
}

const PostScreen = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const post = useSelector((state: State) => state.post.currentPost)!;
    const isFetching = useSelector((state: State) => state.comment.isFetching);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [newComment, setNewComment] = useState<string|undefined>(undefined);

    const onLiked = useCallback(() => {
        dispatch(postActions.likePost(post?._id, post?.likedByUser));
    }, [post, dispatch]);

    const renderComment = ({ item, index }: renderItemProps) => {
        return (
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 15,
                ...(index > 0) ? { borderTopWidth: 1, borderTopColor: withOpacity(GREY, '99') } : {},
            }}>
                <Text style={{
                    color: DARK_GREY,
                    fontSize: 18,
                }}>{item.text}</Text>

                {item.createdByUser && (
                    <TouchableOpacity onPress={() => onDeleteComment(item._id)}>
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            color={PRIMARY}
                            size={18}
                        />
                    </TouchableOpacity>
                )}
            </View>
        );
    };

    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        dispatch(postActions.getPost(post._id));
        setIsRefreshing(false);
    }, [post, dispatch]);

    const refreshControl: React.ReactElement = (
        <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={PRIMARY}
            colors={[PRIMARY]}
        />
    );

    const onSendComment = useCallback(() => {
        if (newComment && newComment !== '')
            dispatch(commentActions.createComment(post?._id, newComment));
        setNewComment(undefined);
    }, [post, dispatch, newComment]);

    const onDeleteComment = useCallback((commentId: string) => {
        dispatch(commentActions.deleteComment(commentId, post?._id));
    }, [post, dispatch]);

    return (
        <View style={{height: '100%'}}>
            <CloseButton navigation={navigation}/>
            <Post
                color={post?.colorCode || BLACK}
                text={post?.text}
                isLiked={post?.likedByUser}
                onLiked={onLiked}
                likeCount={post?.likeAmount}
                commentCount={post?.comments.length}
            />

            {/* Comments Component */}

            <View style={{height: '100%', flex: 1}}>
                {isFetching ? (<Loader style={{ flex: 1, marginVertical: 12 }} size={26} />) : (
                    <FlatList
                        data={post?.comments as Comment[]}
                        keyExtractor={(item: Comment) => item._id}
                        renderItem={renderComment}
                        refreshControl={refreshControl}
                        ListEmptyComponent={EmptyComments}
                    />
                )}

                {/* Add comment component */}

                <View style={{
                    flexDirection: 'row',
                    borderTopColor: LIGHT_GREY,
                    borderTopWidth: 1,
                }}>
                    <Input
                        placeholder="Say something nice..."
                        multiline
                        style={{
                            flex: 1,
                            borderWidth: 0,
                            paddingLeft: 15,
                            fontSize: 16,
                        }}
                        value={newComment}
                        onChange={(value: string) => { setNewComment(value); }}
                    />
                    <Button
                        viewStyle={{
                            backgroundColor: 'transparent',
                            width: 80,
                        }}
                        textStyle={{
                            fontSize: 18,
                            color: PRIMARY,
                        }}
                        disabled={(!newComment || newComment === '') || false}
                        title="Send"
                        onClick={onSendComment}
                    />
                </View>
            </View>
        </View>
    );
};

export default PostScreen;
