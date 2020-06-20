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
        q-item(:key='count')
          q-item-section(top='', avatar='')
            q-img(class='image', src='https://picsum.photos/360/360', width='70px', height='70px')
          q-item-section
            q-item-label(class='text-bold') &#xC6D0;&#xCCA0;&#xAC70;
            q-item-label(caption='', lines='2', class='text-bold', style='color: #454545') &#xC11C;&#xC6B8;&#xD2B9;&#xBCC4;&#xC2DC; &#xAD11;&#xC9C4;&#xAD6C; &#xCC9C;&#xD638;&#xB300;&#xB85C;.
            q-item-label(caption='', lines='2', class='text-bold', style='color: #999999') &#xB9AC;&#xBDF0; 510 . &#xB9E4;&#xCE6D; 1,120
          q-item-section(side='', top='')
            q-icon(name='star', color='secondary')
              q-item-label(class='text-bold text-black text-center', caption='') 4.9
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
    }
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
</style>
