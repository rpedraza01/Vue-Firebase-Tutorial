<template>
    <div id="dashboard">
        <section>
            <div class="col1">
                <div class="profile">
                    <h5>{{ userProfile.name }}</h5>
                    <p>{{ userProfile.title }}</p>
                    <div class="create-post">
                        <p>Create a post</p>
                        <form @submit.prevent>
                            <textarea v-model.trim="post.content"></textarea>
                            <button @click="createPost" :disabled="post.content == ''" class="button">Post</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col2">
                <transition name="fade">
                    <div v-if="hiddenPosts.length" @click="showNewPosts" class="hidden-posts">
                        <p>
                            Click to show <span class="new-posts">{{ hiddenPosts.length }}</span>
                            new <span v-if="hiddenPosts.length > 1">Posts</span><span v-else>Post</span>
                        </p>
                    </div>
                </transition>
                <div v-if="posts.length">
                    <div v-for="post in posts" :key="post.posts" class="post">
                        <h5> {{ post.userName }}</h5>
                        <span>{{ post.createdOn | formatDate }}</span>
                        <p>{{ post.content | trimLength }}</p>
                        <ul>
                            <li><a>Comments {{ post.comments }}</a></li>
                            <li><a>Likes {{ post.likes }}</a></li>
                            <li><a>View full post</a></li>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <p class="no-results">There are currently no posts</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from "vuex";
import moment from 'moment';
const fb = require('../firebaseConfig.js')

export default {
    data() {
        return {
            post: {
                content: ''
            }
        }
    },
    computed: {
        ...mapState(['userProfile', 'currentUser', 'posts', 'hiddenPosts'])
    },
    methods: {
        createPost() {
            fb.postsCollection.add({
                createdOn: new Date(),
                content: this.post.content,
                userId: this.currentUser.uid,
                userName: this.userProfile.name,
                comments: 0,
                likes: 0
            }).then(ref => {
                this.post.content = ''
            }).catch(err => {
                console.log(err)
            })
        },
        showNewPosts() {
            let updatedPostsArray = this.hiddenPosts.concat(this.posts)

            this.$store.commit('setHiddenPosts', null)
            this.$store.commit('setPosts', updatedPostsArray)
        }
    },
    filters: {
        formatDate(val) {
            if (!val) { return '-' }
            let date = val.toDate()
            return moment(date).fromNow()
        },
        trimLength(val) {
            if (val.length < 200) {
                return val
            }
            return `${val.substring(0, 200)}...`
        }
    }
}
</script>