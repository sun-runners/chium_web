<template lang="pug">
  component(:is="$route.params.condition_name")
</template>

<script>
import * as TermServices from 'src/components/TermConditionNotes'

export default {
  components: TermServices
}
</script>