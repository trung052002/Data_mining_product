import joblib
import pandas as pd
from os import listdir
import numpy as np

loaded_model = joblib.load('/Users/ngodungminh/Documents/study/data_mining/Web_data_mining/trained_models/linearRegression_trained.joblib')
loaded_model2 = joblib.load('/Users/ngodungminh/Documents/study/data_mining/Web_data_mining/trained_models/decision_tree_trained.joblib')
# Dự đoán cho toàn bộ tập testing
# file = listdir('/Users/ngodungminh/Documents/study/data_mining/test')
# sorted_file = sorted(file)
# list_blogData = []
# header = list(range(1,282))
# for file in sorted_file:
#     name = file[14:24] 
#     test1 = pd.read_csv('/Users/ngodungminh/Documents/study/data_mining/test/'+file, header=None)
#     test1.columns = header
#     index = range(0,len(test1))
#     test1['index'] = index
#     test1['time'] = name
#     test1 = test1[['time'] + test1.columns.tolist()[:-1]]
#     test1 = test1[['index'] + test1.columns.tolist()[:-1]]
#     list_blogData.append(test1)

# final_blogData = pd.concat(list_blogData)
# final_blogData['stt'] = range(0,len(final_blogData))
# final_blogData = final_blogData[['stt'] + final_blogData.columns.tolist()[:-1]]

# test = final_blogData.iloc[:,3:283]

# result = loaded_model.predict(test)
# print(result)


# Dự đoán cho từng file testing
def prediction_and_reality():
    file = listdir('/Users/ngodungminh/Documents/study/data_mining/test')
    sorted_file = sorted(file)
    means_of_reality = []
    means_of_prediction_lr = []
    means_of_prediction_dtr = []
    list_days = []
    for i in sorted_file:
        list_days.append(i[19:24])
    for i in sorted_file:
        temp = pd.read_csv('/Users/ngodungminh/Documents/study/data_mining/test/' + i, header=None)
        array_y = np.asarray(temp[280])
        means_of_reality.append(np.mean(array_y))
        predict_lr = loaded_model.predict(temp.iloc[:,0:280])
        predict_dtr = loaded_model2.predict(temp.iloc[:,0:280])
        means_of_prediction_lr.append(np.mean(predict_lr))
        means_of_prediction_dtr.append(np.mean(predict_dtr))
    return [list_days, means_of_prediction_lr, means_of_prediction_dtr, means_of_reality]    
