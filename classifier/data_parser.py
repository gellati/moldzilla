import pandas as pd
import numpy as np
import glob

def define_variables(material1, value1, material2, value2, material3, value3):
    properties = []
    properties.append(value1)
    properties.append(value2)
    properties.append(value3)

    properties.extend(material_properties(material1))
    properties.extend(material_properties(material2))
    properties.extend(material_properties(material3))

    return properties

def material_properties(char):
    properties = []
    if(char == 'T'):
        properties.append(410)
        properties.append(1300)
    elif(char == 'C'):
        properties.append(70)
        properties.append(2500)
    elif(char == 'B'):
        properties.append(2200)
        properties.append(850)
    elif(char == 'V'):
        properties.append(60)
        properties.append(850)
    elif(char == 'H'):
        properties.append(130)
        properties.append(2300)
    return properties

def find_output(row, col1, col2):
    temp = row[col1]
    RH = row[col2]

    if(temp < 1):
        if(RH > 0.985*100):
            return 1
        else:
            return 0
    elif(temp >=1 and temp < 29):
        comp = 0.981707 - 0.02642*temp + 0.00108283*(temp*temp) - 0.0000150123* (temp*temp*temp)
        if(RH >= comp*100):
            return 1
        else:
            return 0
    else:
        if(RH > 0.76*100):
            return 1
        else:
            return 0


files = glob.glob("C:\\Users\\forss\\OneDrive\\research\\AEC hackaton\\data\\*.txt")

print(files)

for f in files:
    print(f)
    df_orig = pd.read_csv(f, sep="   ", engine='python')

    cols = [0]
    df_orig.drop(df_orig.columns[cols],axis=1,inplace=True)

    df_orig['out0'] = df_orig.apply (lambda row: find_output (row, df_orig.columns[0], df_orig.columns[1]), axis=1)
    df_orig['out1'] = df_orig.apply (lambda row: find_output (row, df_orig.columns[2], df_orig.columns[3]), axis=1)
    df_orig['out2'] = df_orig.apply (lambda row: find_output (row, df_orig.columns[4], df_orig.columns[5]), axis=1)
    df_orig['out3'] = df_orig.apply (lambda row: find_output (row, df_orig.columns[6], df_orig.columns[7]), axis=1)
    df_orig['out4'] = df_orig.apply (lambda row: find_output (row, df_orig.columns[8], df_orig.columns[9]), axis=1)
    df_orig['out5'] = df_orig.apply (lambda row: find_output (row, df_orig.columns[10], df_orig.columns[11]), axis=1)

    #Drop the two first years
    df_last_year = df_orig.iloc[17520:]

    out0 = df_orig.loc[df_orig['out0'] == 1]
    out1 = df_orig.loc[df_orig['out1'] == 1]
    out2 = df_orig.loc[df_orig['out2'] == 1]
    out3 = df_orig.loc[df_orig['out3'] == 1]
    out4 = df_orig.loc[df_orig['out4'] == 1]
    out5 = df_orig.loc[df_orig['out5'] == 1]
    #out1.groupby('a').count()

    results = [len(out0.index), len(out1.index), len(out2.index), len(out3.index), len(out4.index), len(out5.index)]

    name = f.split('\\')[-1]
    variables = name.split('.')[0].split('-')

    df_input = define_variables(variables[0][0], int(variables[0][1:]), variables[1][0], int(variables[1][1:]), variables[2][0], int(variables[2][1:]))

    df_input.extend(results)
    print(df_input)

pass
