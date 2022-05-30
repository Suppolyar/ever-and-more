import { defineConfig } from '@windicss/plugin-utils'
import plugin from 'windicss/plugin';
import colors from 'windicss/colors';

const designColors = {
  brandPurple: "#624776"
}
export default defineConfig({
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      brandPurple: "#CC99CC"
    }),
  },
  attributify: true,
})
