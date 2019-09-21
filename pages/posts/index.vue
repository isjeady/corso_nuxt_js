<template>
<div>
    <p class="text-5xl">Posts</p>
    <div class="flex flex-wrap justify-between pt-12 -mx-6">
			<div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<PostPreview
              id="1"
              title="Lorem ipsum dolor sit amet."
              description="	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at i"
              thumbnail="https://source.unsplash.com/collection/225/800x600"
              userImg="http://i.pravatar.cc/300"
              timeToRead="1 MIN READ"
            ></PostPreview>
		  </div>
		</div>
</div>
</template>


<script>
import PostPreview from '~/components/Post/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  data(){
    return {
      posts : [
        { id : '1', title : 'Lorem ipsum dolor sit amet.',description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,thumbnail : '225', userImg : 'http://i.pravatar.cc/300', timeToRead : '1 MIN READ'},
        { id : '2', title : 'Lorem ipsum dolor sit amet.',description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,thumbnail : '3106804', userImg : 'http://i.pravatar.cc/300', timeToRead : '1 MIN READ'},
        { id : '3', title : 'Lorem ipsum dolor sit amet.',description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,thumbnail : '3657445', userImg : 'http://i.pravatar.cc/300', timeToRead : '1 MIN READ'},
        { id : '4', title : 'Lorem ipsum dolor sit amet.',description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,thumbnail : '764827', userImg : 'http://i.pravatar.cc/300', timeToRead : '1 MIN READ'},
        { id : '5', title : 'Lorem ipsum dolor sit amet.',description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,thumbnail : '1118905', userImg : 'http://i.pravatar.cc/300', timeToRead : '1 MIN READ'},
        { id : '6', title : 'Lorem ipsum dolor sit amet.',description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,thumbnail : '325867', userImg : 'http://i.pravatar.cc/300', timeToRead : '1 MIN READ'}
      ]
    }
  }
}
</script>
