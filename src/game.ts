const baseScene = new Entity()

engine.addEntity(baseScene)

// baseScene.addComponent(new GLTFShape("models/interior.glb"))
baseScene.addComponent(
  new Transform({
    position: new Vector3(2, 3.8, 2),
    scale: new Vector3(2, 2, 2)
  })
)
const room2 = new Entity()
engine.addEntity(room2)
room2.addComponent(
  new Transform({
    position: new Vector3(2, 0, 2),
    scale: new Vector3(2, 2, 2)
  })
)

room2.addComponent(new GLTFShape("models/room2.glb"))

// Video stream link from Vimeo
const videoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.loop = true
videoTexture.play()

const videoScreen = new Entity()

videoScreen.addComponent(new PlaneShape())
videoScreen.addComponent(
  new Transform({
    scale: new Vector3(3, 5, 3),
    position: new Vector3(4.34, 4, -4.2)
  })
)

const cylinderScreen = new Entity()
cylinderScreen.addComponent(new CylinderShape())
cylinderScreen.addComponent(
  new Transform({
    scale: new Vector3(3, 2, 3),
    position: new Vector3(0, 0, 12)
  }).rotate(Vector3.Up(), 90)
)

const videoMaterial = new Material()
videoMaterial.albedoTexture = videoTexture
videoMaterial.emissiveTexture = videoTexture
videoMaterial.emissiveColor = Color3.White()
videoMaterial.emissiveIntensity = 0.6
videoMaterial.roughness = 1.0
videoScreen.addComponent(videoMaterial)

cylinderScreen.addComponent(videoMaterial)

room2.addComponent(videoMaterial)

engine.addEntity(cylinderScreen)
// engine.addEntity(videoScreen)
