"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusEnum = void 0;
var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum[TaskStatusEnum["TODO"] = 0] = "TODO";
    TaskStatusEnum[TaskStatusEnum["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TaskStatusEnum[TaskStatusEnum["DONE"] = 2] = "DONE";
    TaskStatusEnum[TaskStatusEnum["FAILED"] = 3] = "FAILED";
})(TaskStatusEnum || (exports.TaskStatusEnum = TaskStatusEnum = {}));
;
