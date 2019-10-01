<template>
    <div>
        <div class="bg-white shadow-md rounded px-8 pt-20 pb-8 mb-4">
             <form class="w-64 inline-block">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Title
                    </label>
                    <input v-model="newPost.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="title" type="text" placeholder="Title">
                     <p class="text-red-500 text-xs italic">Please choose a Title.</p>
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                        Description
                    </label>
                    <textarea v-model="newPost.description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" >
                    </textarea>
                    <p class="text-red-500 text-xs italic">Please choose a Description.</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="thumbnail">
                        Thumbnail
                    </label>
                    <input v-model="newPost.thumbnail" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="thumbnail" type="text" placeholder="Thumbnail">
                     <p class="text-red-500 text-xs italic">Please choose a Thumbnail.</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="thumbnail">
                        userImg
                    </label>
                    <input v-model="newPost.userImg" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="userImg" type="text" placeholder="userImg">
                     <p class="text-red-500 text-xs italic">Please choose a userImg.</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="thumbnail">
                        Time To Read
                    </label>
                    <input v-model="newPost.timeToRead" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     id="timeToRead" type="text" placeholder="timeToRead" >
                     <p class="text-red-500 text-xs italic">Please choose a timeToRead.</p>
                </div>

                <div class="flex items-center justify-between">
                    <button @click="cancel" class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Annulla
                    </button>
                    <button @click="save" class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Salva
                    </button>
                </div>
            </form>
        </div>
           <pre><code>{{ newPost }}</code></pre>
    </div>
</template>


<script>

export default {
  components: {

  },
  props : {
      post : {
          type : Object,
          required : false
      }
  },
  data(){
    return {
        newPost : this.post ? { ...this.post } :
        {
            title : '',
            description : '',
            thumbnail : '',
            userImg : '',
            timeToRead : '1 MIN READ',
            tail : '1/3',
        }
    }
  },
  methods : {
    save(){
      console.log(this.newPost);
      this.$emit('save',this.newPost);
    },
    cancel(){
      this.$router.push('/admin');
    }
  }
}
</script>
