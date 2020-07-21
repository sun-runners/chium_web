<template lang="pug">
  div(class='bg-grey-3 padding-top')
    q-list(padding='', class='q-mt-lg bg-white')
      q-item-label(header='')
        div(class='row')
          div(class='col')
            q-btn-group(flat)
              q-btn(color='white', :size="$q.screen.width < 376 ? 'xs' : 'sm'" class='text-blue btn-group-filter btn-group-filter-active', flat label='전체')
              q-btn(color='white', :size="$q.screen.width < 376 ? 'xs' : 'sm'" class='text-grey-6 btn-group-filter', flat label='철거')
              q-btn(color='white', :size="$q.screen.width < 376 ? 'xs' : 'sm'" class='text-grey-6 btn-group-filter', flat label='폐기물')
          
          div(class='col flex justify-end')
            q-btn-dropdown(color='white', class='text-black', flat='', label='인기순')
              q-list
                q-item(clickable='', v-close-popup='', @click='onItemClick')
                  q-item-section
                    q-item-label Photos
                q-item(clickable='', v-close-popup='', @click='onItemClick')
                  q-item-section
                    q-item-label Videos
                q-item(clickable='', v-close-popup='', @click='onItemClick')
                  q-item-section
                    q-item-label Articles

      template(v-for='count in 20')
        q-item(:key='count' class="result-list" clickable @click='onItemResultClick')
          q-item-section(top='', avatar='')
            q-img(class='image', src='https://picsum.photos/360/360', width='70px', height='70px')
          q-item-section
            q-item-label(class='notosanskr-medium' style="font-size: 15px") 미래 철거 폐기물
            q-item-label(caption='', lines='2', class='notosanskr-regular', style='color: #454545; font-size: 13px') 경기 화성시 병점로 12
            q-item-label(caption='', lines='2', class='text-bold', style='color: #999999; font-size: 12px') 
              
              span(class="review-matching-text-border")
                span(class="text-secondary notosanskr-medium") 1,520 
                span(class="notosanskr-regular") 리뷰
              span(class="review-matching-text")
                span(class="text-secondary notosanskr-medium") 12,520 
                span(class="notosanskr-regular") 매칭
          q-item-section(side='', top='')
            span
              q-icon(name='star', color='secondary' style="font-size:20px")
              q-item-label(class='notosanskr-medium score-value text-black text-center', caption='') 4.9
        q-separator(:key="count + '-separator'", spaced='')

</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      slide: 1
    }
  },
  components: {

  },
  methods: {
    onItemClick () {
      alert('click');
    },
    onItemResultClick () {
      this.$router.push("store")
    },
  }
}
</script>

<style lang="stylus">
.padding-top
  padding-top: 0.1mm

.btn-group-filter
  border: 1px solid #888888

.btn-group-filter-active
  border: 1px solid #18A0FB
  color: #18A0FB

.review-matching-text-border
  padding: 10px
  padding-left: 0px
  border-right: 1px #F2F2F2 solid

.review-matching-text
  padding: 10px

.result-list
  cursor: pointer
  &:hover
   background-color: #F2F2F2

.scope-value
  font-size 12px
</style>
