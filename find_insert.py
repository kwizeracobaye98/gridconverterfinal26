import re
with open('c:/Users/hp/Downloads/mobilegridconverter2-main/index.html','r',encoding='utf-8') as f:
    lines = f.readlines()
for i, line in enumerate(lines, 1):
    if 'function generateReport' in line:
        print(f'generateReport at line {i}')
    if 'function startMotionFusionSensors' in line:
        print(f'startMotionFusionSensors at line {i}')
    if 'function showAutoRouteGenerator' in line:
        print(f'showAutoRouteGenerator at line {i}')
    if 'function generateAutoRoute' in line:
        print(f'generateAutoRoute at line {i}')
    if 'function toggleAutoRouteLunch' in line:
        print(f'toggleAutoRouteLunch at line {i}')
    if 'function closeAutoRouteGenerator' in line:
        print(f'closeAutoRouteGenerator at line {i}')
    if 'function setAutoRouteGroup' in line:
        print(f'setAutoRouteGroup at line {i}')
    if 'function toggleTrackRecording' in line:
        print(f'toggleTrackRecording at line {i}')
    if 'function startTrackRecording' in line:
        print(f'startTrackRecording at line {i}')

