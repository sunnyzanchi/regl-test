// TODO: Take advantage of GLSLify to use a better noise algorithm
import frag from './fragment.frag'
import vert from './vertex.vert'

import createRegl from 'regl'

const regl = createRegl()

const draw = regl({
  frag,
  vert,
  attributes: {
    position: [[-1, -1], [0, 1], [1, -1], [1, 0]]
  },
  uniforms: {
    frame: regl.prop('frame'),
    mouse: regl.prop('mouse')
  },
  depth: {
    enable: false
  },
  count: 4
})

// TODO: Use regl's state - context, i think?
let frame = 0
let mouse = [0, 0]

document.addEventListener('mousemove', e => {
  // TODO: Get this dynamically from canvas height
  mouse = [e.clientX, -e.clientY + 1300]
})

regl.frame(({ tick }) => {
  regl.clear({ color: [0, 0, 0, 1] })

  draw({ frame, mouse })
  frame += 1
})
