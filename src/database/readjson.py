import json
# Memory Size
# TDP
# Length
# Height
# Width
def read_json(path):
    with open(path, 'r') as f:
        return json.loads(f.read())
ngpus = read_json('./NVIDIA.json')
agpus = read_json('./AMD.json')
gpus = {}
for gpu in ngpus:
    if(gpu[:4] == "Sony" or gpu[:4] == "null" ):continue
    ngpus[gpu]["Manufacturer"] = "NVIDIA"
    gpus[gpu] = ngpus[gpu]
for gpu in agpus:
    if(gpu[:4] == "Sony" or gpu[:4] == "null" ):continue
    agpus[gpu]["Manufacturer"] = "AMD"
    gpus[gpu] = agpus[gpu]
for gpu in gpus:
    if(not gpu):continue
    if("Memory Size" in gpus[gpu]):
        if(gpus[gpu]["Memory Size"] == ""):
            gpus[gpu]["Memory Size"] = -1
        else:
            gpus[gpu]["Memory Size"] = int(gpus[gpu]["Memory Size"].split()[0])
    else:
        gpus[gpu]["Memory Size"] = -1
    if(gpus[gpu]["Memory Size"] == -1):
        if(gpu[-2:] == "GB"):
            gpus[gpu]["Memory Size"] = int(gpu[-4:-2])
        else:
            gpus[gpu]["Memory Size"] = -1
    if("TDP" in gpus[gpu]):
        gpus[gpu]["TDP"] = int(gpus[gpu]["TDP"].split()[0])
    else:
        gpus[gpu]["TDP"] = -1
    if("Length" in gpus[gpu]):
        gpus[gpu]["Length"] = int(gpus[gpu]["Length"].split()[0])
    else:
        gpus[gpu]["Length"] = -1
    if("Height" in gpus[gpu]):
        gpus[gpu]["Height"] = int(gpus[gpu]["Height"].split()[0])
    else:
        gpus[gpu]["Height"] = -1
    if("Width" in gpus[gpu]):
        gpus[gpu]["Width"] = int(gpus[gpu]["Width"].split()[0])
    else:
        gpus[gpu]["Width"] = -1
with open('./GPUs.json', 'w') as f:
    f.write(json.dumps(gpus))
