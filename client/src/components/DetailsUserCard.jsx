
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import "./DetailsUserCard.css"
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch, useSelector } from "react-redux";
import { addDetailsOpen } from "../Redux/UserCards/action";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


export default function DetailsUserCard() {
  const storeData = useSelector(store => store);
  const open = storeData.allData.open;
  const details = storeData.allData.details;
  const dispatch = useDispatch();

  return (
    <div>
      <BootstrapDialog
        onClose={() => {
            dispatch(addDetailsOpen(false));
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => {
            dispatch(addDetailsOpen(false));
        }}>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <div className = "avatar__box">
            <Avatar
                alt="Remy Sharp"
                src={details !== undefined ? details.image : "" }
                sx={{ width: 100, height: 100 }}
            />
            <div className="avatar__details">
                <p className="avatar__content"><b>{details !== undefined ? details.name : ""}</b></p>
                <div className="avatar__status">
                    <CircleIcon />
                    <p className="avatar__content">{details !== undefined ? details.status : ""} - {details !== undefined ? details.species : ""}</p>
                </div>
            </div>
        </div>
        <div className="avatar__body">
            <div className="body__left">
              <div className="left__up">gender <br /> <b>{details !== undefined ? details.gender : ""}</b></div>
              <div className="left__down">species <br /> <b>{details !== undefined ? details.species : ""}</b></div>
            </div>
            <div className="body__right">
              {open ?
                <>
                  <div className="right__up">location <br /> <b>{details.location.name !== undefined ? details.location.name : ""}</b></div>
                  <div className="right__down">origin <br /> <b>{details.origin.name !== undefined ? details.origin.name : ""}</b></div>
                </> 
                :
                ""
              }
            </div>
        </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
