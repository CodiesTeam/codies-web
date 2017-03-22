<template>
  <div class="top-view">
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
    <ul>
      <li v-for="item in 10">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: 'top',
    data () {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      question: function (newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      getAnswer: _.debounce(
        function () {
          const vm = this
          if (this.question.indexOf('?') === -1) {
            vm.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          vm.answer = 'Thinking...'
          this.axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        500
      ),
      getList: function () {
//        const url = 'https://www.reddit.com/.json'
      }
    }
  }
</script>

<style scoped>
</style>
