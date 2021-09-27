const { DailyData } = require("../database/models");

const add = async (req, res, next) => {
  try {
    const { user } = req;
    const { date } = req.body;

    const checkDate = await DailyData.findOne({
      where: {
        date,
      },
    });

    if (checkDate) {
    } else {
      const newData = await DailyData.create({
        date,
        user_id: user.id,
      });
      return res.status(201).json({
        status: "succes",
        code: 201,
        message: "success add new data",
        data: newData,
      });
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  add,
};
