<template>
<div>
  <div class="container max-w-5xl mx-auto -mt-32">

		<div class="mx-0 sm:mx-6">

			<div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

   <p class="font-extrabold text-3xl md:text-5xl">Posts  {{ currentPost.id }}</p>

		<p class="text-sm md:text-base text-teal-500 font-bold">08 APRIL 2019 <span class="text-gray-900">/</span> GETTING STARTED</p>

				
	{{ currentPost }}
				<p class="py-6 text-left">
					{{ currentPost.description }}
				</p>

				</div>

		</div>


	</div>

</div>
</template>


<script>
import PostList from '~/components/Post/PostList.vue'

export default {
  asyncData(context,callback){
	  console.log('asyncData');
	  setTimeout(() => {
		  callback(null, {
			  currentPost : {
				   tail : '1/2', 
				   id : context.route.params.id, 
				   title : 'Lorem ipsum dolor sit amet.',
				   description : 'Lorem ipsum eu nunc commodo posuere et sit amet ligula.' ,
				   thumbnail : 'https://source.unsplash.com/collection/764827/800x600', 
				   userImg : 'http://i.pravatar.cc/300', 
				   timeToRead : '1 MIN READ'
			  }
		  })
	  });
  }
}
</script>
