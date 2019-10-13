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
import axios from 'axios'
import config from '@/config';

export default {
  asyncData(context){
	console.log('asyncData');
	return axios.get(`${config.databaseUrl}/posts/${context.params.id}.json`)
          .then(res => {
			  return {
					currentPost : res.data
			  }
          })
          .catch(error => {
            console.log(error);
          });
  },
  computed: {
	  
  }
}
</script>
