import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* antd按需引入插件配置 */
import styleImport,{AntdResolve} from 'vite-plugin-style-import'
 /* @路径别名配置 */
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolve: [
        AntdResolve()
      ]
    })
  ],
  /* @路径别名配置 */
  resolve:{
    alias:{
      "@":path.resolve(__dirname, "./src")
    }
  }
})
