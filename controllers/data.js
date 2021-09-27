const { Data, DailyData } = require("../database/models");

const addData = async (req, res, next) => {
  try {
    const { user } = req;
    const { description, type, price, time } = req.body;

    const checkDate = await DailyData.findOne({
      where: {
        date: time,
        user_id: user.id,
      },
    });

    if (checkDate) {
      newDailyData = await Data.create({
        description,
        type,
        price,
        user_id: user.id,
        time,
        dailyData_id: checkDate.id,
      });

      const data = await Data.findAll({
        where: {
          dailyData_id: checkDate.id,
        },
      });

      const income = data
        .filter((val) => val.type === "income")
        .map((e) => e.price)
        .reduce((a, b) => a + b, 0);

      const expense = data
        .filter((val) => val.type === "expense")
        .map((e) => e.price)
        .reduce((a, b) => a + b, 0);

      const balance = income - expense;

      await DailyData.update(
        {
          total_income: income,
          total_expense: expense,
          total_balance: balance,
        },
        {
          where: {
            id: checkDate.id,
          },
        }
      );

      return res.status(201).json({
        status: "succes",
        code: 201,
        message: "success add new data",
        income: income,
        expense: expense,
        balance: balance,
      });
    } else {
      const newDailyData = await DailyData.create({
        user_id: user.id,
        date: time,
        total_income: 0,
        total_expense: 0,
        total_balance: 0,
      });

      await Data.create({
        description,
        type,
        price,
        user_id: user.id,
        time,
        dailyData_id: newDailyData.id,
      });

      const data = await Data.findAll({
        where: {
          dailyData_id: newDailyData.id,
        },
      });

      const income = data
        .filter((val) => val.type === "income")
        .map((e) => e.price)
        .reduce((a, b) => a + b, 0);

      const expense = data
        .filter((val) => val.type === "expense")
        .map((e) => e.price)
        .reduce((a, b) => a + b, 0);

      const balance = income - expense;

      await DailyData.update(
        {
          total_income: income,
          total_expense: expense,
          total_balance: balance,
        },
        {
          where: {
            id: newDailyData.id,
          },
        }
      );

      return res.status(201).json({
        status: "succes",
        code: 201,
        message: "success add new data and dailydata",
        income: income,
        expense: expense,
        balance: balance,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { user } = req;
    const { type, description, time, price } = req.body;

    const updateData = await Data.update(
      {
        id,
        type,
        description,
        price,
        time,
        user_id: user.id,
      },
      {
        where: {
          id,
        },
      }
    );
    const data = await Data.findAll({
      where: {
        dailyData_id: updateData.dailyData_id,
      },
    });

    const income = data
      .filter((val) => val.type === "income")
      .map((e) => e.price)
      .reduce((a, b) => a + b, 0);

    const expense = data
      .filter((val) => val.type === "expense")
      .map((e) => e.price)
      .reduce((a, b) => a + b, 0);

    const balance = income - expense;

    await DailyData.update(
      {
        total_income: income,
        total_expense: expense,
        total_balance: balance,
      },
      {
        where: {
          id: updateData.dailyData_id,
        },
      }
    );
    return res.status(201).json({
      status: "succes",
      code: 201,
      message: "success add new data and dailydata",
      income: income,
      expense: expense,
      balance: balance,
    });
  } catch (err) {
    return next(err);
  }
};

const getDataById = async (req, res, next) => {
  try {
    const { user } = req;
    const allData = await Data.findAll({
      where: {
        user_id: user.id,
      },
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "succes get product",
      data: allData.reverse(),
    });
  } catch (error) {
    return next(error);
  }
};

const getDataDaily = async (req, res, next) => {
  try {
    const { user } = req;

    const data = await DailyData.findAll({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Data,
          as: "datas",
        },
      ],
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "succes get product",
      data: data,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  addData,
  getDataById,
  getDataDaily,
  update,
};
