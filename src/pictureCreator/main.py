import cv2
import numpy

capture = cv2.VideoCapture(0)
# 0 or 1 or etc to access my camera video OR a path

def rescaleFrame(frame, scale=0.75):
  height = int(frame.shape[0] * scale)
  width = int(frame.shape[1] * scale)
  dimmensions = (width, height)

  return cv2.resize(frame, dimmensions, interpolation=cv2.INTER_AREA)

while True:
  isTrue, frame = capture.read()
  frame_resize = rescaleFrame(frame, scale=1)

  cv2.imshow("Camera", frame_resize) # For each loop

  if cv2.waitKey(20) & 0xFF == ord("q"): # ord return a 32-bit integer
    break

capture.release()
cv2.destroyAllWindows()
