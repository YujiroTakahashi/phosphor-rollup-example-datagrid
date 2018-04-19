import alias    from 'rollup-plugin-alias'
import buble    from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import resolve  from 'rollup-plugin-node-resolve'

export default {
    entry: 'src/index.js',
    external: [],
    globals: {},
    plugins: [
        alias({
            'phosphor-datagrid': 'node_modules/@phosphor/datagrid/lib/index.js',
            'phosphor-widgets': 'node_modules/@phosphor/widgets/lib/index.js'
        }),
        resolve({
            jsnext: true
        }),
        commonjs(),
        buble()
    ],
    context: 'window',
    targets: [
        {dest: 'dist/bundle.js', format: 'iife'},
        {dest: 'dist/bundle.es.js', format: 'es'}
    ]
}
