

from sklearn import svm
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold, cross_val_score
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.neural_network import MLPClassifier

np.random.seed(0)
df_dataset = pd.read_csv("C:\\Users\\forss\\OneDrive\\research\\AEC hackaton\\aec_dataset.csv", sep = ';')
df_dataset.columns = ['1','2','3','4','5','6','7','8','9','10']

y = df_dataset[['10']]
X = df_dataset[df_dataset.columns.difference(['10'])]

#X = preprocessing.normalize(X)

clf = svm.SVC(gamma=0.01, C=8., random_state=0)

clf2 = RandomForestClassifier(n_estimators = 20, random_state=0)

clf3 = MLPClassifier(solver='lbfgs', alpha=1e-5, hidden_layer_sizes=(5, 5), random_state=0)

print("SVM Cross validation ----")
k_fold = KFold(n_splits=4)
score = cross_val_score(clf, X, y.values.ravel(), cv=k_fold)
print (score)
print("averaged accuracy: "+ str(sum(score)/len(score)))
print("RandomForest Cross validation ----")
score = cross_val_score(clf2, X, y.values.ravel(), cv=k_fold)
print (score)
print("averaged accuracy: "+ str(sum(score)/len(score)))
print("Neural Network Cross validation ----")
score = cross_val_score(clf3, X, y.values.ravel(), cv=k_fold)
print (score)
print("averaged accuracy: "+ str(sum(score)/len(score)))

pass