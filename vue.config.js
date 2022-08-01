import Path from 'path'
import svg_sprite_loader from 'svg-sprite-loader/plugin'

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = Path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()  // 只包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    config.plugin('svg-sprite').use(svg_sprite_loader, [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}
