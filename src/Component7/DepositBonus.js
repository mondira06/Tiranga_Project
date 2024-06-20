import React from 'react';
import { Box, Typography, Button, LinearProgress, Divider } from '@mui/material';

const depositOptions = [
  { amount: 220000, bonus: 12555 },
  { amount: 100000, bonus: 8555 },
  { amount: 30000, bonus: 2555 },
  { amount: 10000, bonus: 1555 },
  { amount: 3000, bonus: 555 },
  { amount: 1000, bonus: 255 },
  { amount: 400, bonus: 105 },
  { amount: 200, bonus: 55 },

];

const activityRules = [
  "Exclusive for the first recharge of the account. There is only one chance. The more you recharge, the more rewards you will receive. The highest reward is ₹12,555.00;",
  "Activities cannot be participated in repeatedly;",
  "Rewards can only be claimed manually on IOS, Android, H5, and PC;",
  "The bonus (excluding the principal) given in this event requires 1.00 times the coding turnover (i.e. valid bets) before it can be withdrawn, and the coding does not limit the platform;",
  "This event is limited to normal human operations by the account owner. It is prohibited to rent, use plugins, robots, gamble with different accounts, brush each other, arbitrage, interfaces, protocols, exploit loopholes, group control or other technical means to participate, otherwise it will be canceled or Rewards will be deducted, frozen, or even blacklisted;",
  "In order to avoid differences in text understanding, the platform reserves the right of final interpretation of this event."
];

const DepositBonusPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>First Deposit Bonus</Typography>
      {depositOptions.map((option, index) => (
        <Box key={index} sx={{ marginBottom: 3, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ color: 'orange' }}>
            First deposit ₹{option.amount.toLocaleString()}
          </Typography>
          <Typography variant="body1" sx={{ color: 'green', marginBottom: 1 }}>
            + ₹{option.bonus.toLocaleString()}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Deposit ₹{option.amount.toLocaleString()} for the first time and you will receive ₹{option.bonus.toLocaleString()} bonus
          </Typography>
          <LinearProgress variant="determinate" value={0} sx={{ height: 10, borderRadius: 5, marginBottom: 2 }} />
          <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#f0a500",
                  flex: 1,
                  mx: 0.5,
                }}
              >Deposit</Button>
        </Box>
      ))}

      {/* Divider between sections */}
      <Divider sx={{ marginY: 3 }} />

      {/* Activity Rules Section */}
      <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 2, backgroundColor: '#fef9e7' }}>
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'white', backgroundColor: 'orange', borderRadius: '4px 4px 0 0', padding: '8px' }}>
          Activity Rules
        </Typography>
        <Box sx={{ padding: 2 }}>
          {activityRules.map((rule, index) => (
            <Typography key={index} variant="body2" sx={{ marginBottom: 1, display: 'flex', alignItems: 'flex-start' }}>
              <Box component="span" sx={{ marginRight: 1, color: 'orange' }}>•</Box>
              {rule}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DepositBonusPage;
