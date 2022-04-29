import cv2 as cv

capture = cv.VideoCapture(0)

# Convert those BGR images to GRAYSCALE
def grayScaleConversor(frame):
  return cv.cvtColor(frame, cv.COLOR_BGR2GRAY)

# Blur conversor
def blurConversor(frame):
  return cv.GaussianBlur(frame, (9, 9), cv.BORDER_DEFAULT)

# Edge Cascade
def edgeCascadeConversor(frame):
  return cv.Canny(
    frame,
    10,
    35
  )

# Dilating the frame
def dilatedConversor(frame):
  return cv.dilate(frame, (2, 2), iterations=3)

# Eroding
def erodedConversor(frame):
  return cv.erode(frame, (3, 3), iterations=4)

# Resize
def resizeConversor(frame):
  return cv.resize(frame, (500, 500), interpolation=cv.INTER_CUBIC)

# Cropping
def cropperConversor(frame):
  return frame[25: 500, 250: 500]

while True:
  isTrue, frame = capture.read()
  grayFrame = grayScaleConversor(frame)
  edgeCascadeFrame = edgeCascadeConversor(grayFrame)
  dilatedFrame = dilatedConversor(edgeCascadeFrame)
  erodedFrame = erodedConversor(dilatedFrame)
  resizedFrame = resizeConversor(erodedFrame)
  croppedFrame = cropperConversor(resizedFrame)

  cv.imshow("", croppedFrame)

  if cv.waitKey(20) & 0xFF == ord("q"):
    break

capture.release()
cv.destroyAllWindows()
