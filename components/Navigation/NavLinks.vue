<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import List from '~/components/Presentation/List/List.vue'
import { navItems, INavItem } from './NavItems'
import { isExternal } from '~/helpers/url'

@Component({
  components: {
    List
  }
})
export default class NavLinks extends Vue {
  navItems: Array<INavItem> = navItems;

  render(h) {
    return h('list',
      {
        class: {
          'v-nav-links': true
        },
        props: {
          'bare': true,
          'inline': true
        }
      },
      this.navItems.map((navItem: INavItem) => {
        return h('li',
          {
            class: {
              'v-nav-links__item': true
            }
          },
          isExternal(navItem.url, process.env.baseUrl)
            ? [
              h('a', {
                class: {
                  'v-nav-links__link': true
                },
                attr: {
                  href: navItem.url
                }
              }, navItem.title)
            ]
            : [
              h('nuxt-link', {
                class: {
                  'v-nav-links__link': true
                },
                props: {
                  to: navItem.url
                }
              }, navItem.title)
            ]
        )
      })
    )
  }
}
</script>

<style lang="scss" scoped>
.v-nav-links {
  text-align: center;
}
.v-nav-links__link {
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
