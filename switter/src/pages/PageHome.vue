<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">

      <div class="col">
        <q-input
        bottom-slots
        v-model="newConfession"
        placeholder="I know you wanna Confess..."
        counter
        maxlength="280"
        autogrow
        class="new-confess"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        
      </q-input>
      </div>
      
      <div class="col col-shrink">
        <q-btn 
          :disable="!newConfession"
          unelevated 
          class="q-mb-lg"
          rounded 
          color="primary" 
          label="confess" 
          no-caps 
          />
      </div>


      
    </div>

    <q-separator size="10px" color="grey-2" class="boarder-separeta"/>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  // newConfessions
  data() {
    return {
      newConfession: "",
    };
  },
});
</script>

<style lang="sass">
.new-confess
  textarea
    font-size: 19px
    line-height: 1.4 !important

.boarder-separeta
  border-top: 1px solid 
  border-bottom: 1px solid 
  border-color: $grey-4
</style>
