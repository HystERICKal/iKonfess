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

     <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <!-- <q-item-label><strong>Erick Francis</strong></q-item-label>
          <span class="text-grey-7">
            @erick__francis21
          </span> -->
          <q-item-label class="text-subtitle1"><strong>Confession #601</strong></q-item-label>
          <q-item-label class="confess-content text-body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.            
            
            Quia animi necessitatibus recusandae in numquam, ea dignissimos 
            voluptatum hic voluptate ipsum inventore. Quam error unde odit 
            soluta sapiente veniam architecto culpa?
          </q-item-label>
          <div class="row justify-between q-mt-sm">
          <q-btn 
          flat 
          round 
          color="grey" 
          icon="far fa-comment"
          size="sm" />

          <q-btn 
          flat 
          round 
          color="grey" 
          icon="fas fa-retweet"
          size="sm" />

          <q-btn 
          flat 
          round 
          color="grey" 
          icon="far fa-heart"
          size="sm" />

          <q-btn 
          flat 
          round 
          color="grey" 
          icon="fas fa-trash"
          size="sm" />
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      
      
    </q-list>

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
.confess-content
  white-space: pre-line
</style>
