<template lang="pug">
  div(class="row")
    div(class="col-12 q-pt-xs flex justify-center bg-white")
      img(:src="'https://placeimg.com/'+$q.screen.width+'/'+$q.screen.width+'/nature'" style="height: auto; max-width: 100%")

    div(class="col-12")
      q-card(flat class="bg-grey-3 my-card")

        include blocks/details/store-detail

        q-separator(inset)

        include blocks/details/store-information

        q-card-section(class="bg-white q-mt-md")
          div(class="column flex justify-center items-center")
            include blocks/company-introduction
          div(class="column flex content-center" v-for="list in 3" :key="list")
            include blocks/company-post-images
          include blocks/work-photo.pug

</template>

<script>
import { random } from 'lodash'
import WorkLists from 'src/components/StoreWork/WorkLists'

export default {
  name: 'Store',
  created () {
    this.$emit('changeHeadingName', '어게인업');
  },
  components: {
    'work-lists': WorkLists
  },
  data () {
    return {
    }
  },
  methods: {
    random
  },
  computed: {
    btnSize () {
      const width_size = this.$q.screen.width
      return (width_size <= 375 ? 'xs' : (width_size <= 414 ? 'sm' : 'md'))
    },
    btnDense () {
      switch (this.btnSize) {
        case 'xs': return false; break
        case 'sm': return true; break
        default: return false
      }
    },
    randomWidthHeight () {
      const n = random(50, this.$q.screen.width)
      return { width: n, height: random(this.$q.screen.width, this.$q.screen.width - 100) }
    }
  }
}
</script>

<style lang="stylus">
.share-btn
  width: 48px
  height: 48px
  border: 1px solid #D2D2D2
.btn-work-group
  background-color: #EFF1F1
  box-shadow: none

.flex-break
  flex: 1 0 100% !important
  width: 0 !important
$x = 4
for $i in (1)..($x - 1)
  .example-container > div:nth-child($xn + $i)
    order: $i
.example-container > div:nth-child($xn)
  order: $x
.example-container
  height: 700px
  .example-cell
    width: 25%
    padding: 1px
    > div
      padding: 4px 8px
      box-shadow: inset 0 0 0 2px $grey-6
</style>
