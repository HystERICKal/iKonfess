<template>
<q-page class="relative-position">
  <q-scroll-area class="absolute full-width full-height">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">

      <div class="col">
        <q-input
        bottom-slots
        v-model="newConfessionContent"
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
          @click="addnewConfession"
          :disable="!newConfessionContent"
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

     <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <q-item 
        v-for="confession in confessions"
        :key="confession.id"
        class="confession q-py-md"
        >
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
            <q-item-label class="text-subtitle1">
              <strong>Confession #601</strong>
              <span class="text-grey">
               &bull; #categoryX
                <br class="lt-md"> 
                <!-- &bull; {{confession.date | relativeDate}} -->
              </span>
            </q-item-label>
            <q-item-label class="confess-content text-body1">
              {{confession.content}}
            </q-item-label>
            <div class="confess-icons row justify-between q-mt-sm">
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
            @click="toggleLiked(confession)"
            flat 
            round 
            :color="confession.liked ? 'pink' : 'grey'"
            :icon="confession.liked ? 'fas fa-heart' : 'far fa-heart'"
            size="sm" />

            <q-btn 
            @click="deleteConfession(confession)"
            flat 
            round 
            color="grey" 
            icon="fas fa-trash"
            size="sm" />
            </div>
          </q-item-section>

         
        </q-item>
      </transition-group>

      
      
    </q-list>
  </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { defineComponent } from "vue";
import { formatDistance } from 'date-fns'


export default defineComponent({
  name: "PageHome",
  // newConfessions
  data() {
    return {
      newConfessionContent: '',
      confessions: [
        // {
        //   content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
        //     Quia animi necessitatibus recusandae in numquam, ea dignissimos \
        //     voluptatum hic voluptate ipsum inventore. Quam error unde odit \
        //     soluta sapiente veniam architecto culpa?',
        //   //use date-fns to format this date
        //   date: 1627158978579
        // },
        // {
        //   content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
        //     Quia animi necessitatibus recusandae in numquam, ea dignissimos \
        //     voluptatum hic voluptate ipsum inventore. Quam error unde odit \
        //     soluta sapiente veniam architecto culpa?',
        //   date: 1627159026516
        // },
      ]
    }
  },
  methods: {
    addnewConfession() {
      let newConfession = {
        content: this.newConfessionContent,
        date: Date.now(),
        liked: false
        
      }
      // this.confessions.unshift(newConfession)
        db.collection("confessions").add(newConfession).then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      }).catch((error) => {
          console.error("Error adding document: ", error);
      });
      //Make sure the input field remains empty after new confession has been added
      this.newConfessionContent = ''
    },
    deleteConfession(confession){
      // let dateToDelete = confession.date
      // //Loop through each item in array to find index with this date
      // let index = this.confessions.findIndex(confession => confession.date === dateToDelete)
      // //Remove item in the array at the position of that index
      // //If second argument isn't provided, then all the items after the provided starting index are removed from the array
      // this.confessions.splice(index, 1)

      db.collection('confessions').doc(confession.id).delete().then(() => {
        console.log('Document successfully deleted!');
      }).catch((error) => {
        console.error('Error removing document: ', error);
      })
      
    },
    toggleLiked(confession) {
      // var washingtonRef = db.collection("cities").doc("DC");

      // Set the "capital" field of the city 'DC'
      db.collection("confessions").doc(confession.id).update({
        liked: !confession.liked
      })
      .then(() => {
          console.log("Document successfully updated!");
      })
      .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
    }
  },
  filters: {
    relativeDate(value) {
      // Expect two dates (parameters) and returns distance between those two dates in a relative manner such as '2 days ago'
      return formatDistance(value, Date())
    }
  },
  mounted() {
    db.collection('confessions').orderBy('date').onSnapshot(snapshot => {
        snapshot.docChanges().forEach((change) => {
            let confessionChange = change.doc.data()
            confessionChange.id = change.doc.id
            if (change.type === 'added') {
                console.log('New confession: ', confessionChange)
                this.confessions.unshift(confessionChange)
            }
            if (change.type === 'modified') {
                console.log('Modified confession: ', confessionChange)
                let index = this.confessions.findIndex(confession => confession.id === confessionChange.id)
                Object.assign(this.confessions[index], confessionChange)
            }
            if (change.type === 'removed') {
                console.log('Removed confession: ', confessionChange)
                let index = this.confessions.findIndex(confession => confession.id === confessionChange.id)
                this.confessions.splice(index, 1)
            }
        });
    });
  }
})
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
.confession:not(:first-child)
  boarder-top: 1px solid rgba(0, 0, 0, 0.12)
.confess-content
  white-space: pre-line
.confess-icons
  margin-left: -5px
</style>
