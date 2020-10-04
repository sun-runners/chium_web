/* eslint-disable */
import { map, eq, clone, set, isArray, each, includes, isEmpty } from 'lodash';

export default {
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    close() {
      this.modal =  !this.modal;
    }
  },
  computed: {
  },
};
/* eslint-disable */