const baseScene = new Entity()

engine.addEntity(baseScene)

baseScene.addComponent(new GLTFShape("models/interior.glb"))
baseScene.addComponent(
  new Transform({
    position: new Vector3(2, 3.8, 2),
    scale: new Vector3(2, 2, 2),
  })
)

// Video stream link from Vimeo
const videoClip = new VideoClip(
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()
videoTexture.loop = true

const videoScreen = new Entity()

videoScreen.addComponent(new PlaneShape())
videoScreen.addComponent(
  new Transform({
    scale: new Vector3(3, 5, 3),
    position: new Vector3(4.34, 4, -4.2)
  })
)

const videoMaterial = new Material()
videoMaterial.albedoTexture = videoTexture
videoMaterial.emissiveTexture = videoTexture
videoMaterial.emissiveColor = Color3.White()
videoMaterial.emissiveIntensity = 0.6
videoMaterial.roughness = 1.0
videoScreen.addComponent(videoMaterial)

engine.addEntity(videoScreen)
